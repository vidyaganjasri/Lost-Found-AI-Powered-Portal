const Item = require('./models/itemModel');

exports.reportItem = async (req, res) => {
  const { title, description, category, type } = req.body;
  const file = req.file;

  try {
    await Item.create({
      title,
      description,
      category,
      type,
      submittedBy: req.user.id,
      imageUrl: file?.path || '',
    });
    res.status(201).json({ message: 'Item reported successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error reporting item' });
  }
};

exports.getMyItems = async (req, res) => {
  try {
    const items = await Item.getByUser(req.user.id);
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching your items' });
  }
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const updatedRows = await Item.updateStatus(req.params.id, status);
    if (!updatedRows) return res.status(404).json({ error: 'Item not found' });

    const item = await Item.getByIdWithUser(req.params.id);
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating item status' });
  }
};
