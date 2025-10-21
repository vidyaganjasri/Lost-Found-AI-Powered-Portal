const Item = require('./models/itemModel');
const transporter = require('./config/email');

exports.getAllItems = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

  try {
    const items = await Item.getAllWithUser();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching items' });
  }
};

exports.notifyUser = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

  try {
    const item = await Item.getByIdWithUser(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    await transporter.sendMail({
      to: item.submittedByEmail,
      subject: `Update on your ${item.type} item`,
      html: `<p>Your ${item.type} item titled <b>${item.title}</b> has been updated.</p>`,
    });

    res.json({ message: 'Notification sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send notification' });
  }
};
