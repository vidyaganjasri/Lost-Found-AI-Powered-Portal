const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existing = await User.getByEmail(email);
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const id = await User.create({ name, email, password: hashed, role });

    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const url = `http://localhost:3000/verify/${token}`;

    res.status(201).json({ message: `Registration successful. Verify via ${url}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    await User.verify(decoded.id);
    res.send('<h2>Email verified! You can now <a href="/login">login</a>.</h2>');
  } catch {
    res.status(400).send('<h2>Invalid or expired token. <a href="/register">Try again</a>.</h2>');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.getByEmail(email);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });
    if (!user.verified) return res.status(403).json({ error: 'Please verify your email' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during login' });
  }
};
