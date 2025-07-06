-- Create harvest_calendar table
CREATE TABLE IF NOT EXISTS harvest_calendar (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_name TEXT NOT NULL,
  jan TEXT CHECK (jan IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  feb TEXT CHECK (feb IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  mar TEXT CHECK (mar IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  apr TEXT CHECK (apr IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  may TEXT CHECK (may IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  jun TEXT CHECK (jun IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  jul TEXT CHECK (jul IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  aug TEXT CHECK (aug IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  sep TEXT CHECK (sep IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  oct TEXT CHECK (oct IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  nov TEXT CHECK (nov IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  dec TEXT CHECK (dec IN ('', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting')) DEFAULT '',
  best_month TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on product_name for faster queries
CREATE INDEX IF NOT EXISTS idx_harvest_calendar_product_name ON harvest_calendar(product_name);

-- Add RLS (Row Level Security) policies
ALTER TABLE harvest_calendar ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read harvest calendar data
CREATE POLICY "Allow anonymous read access to harvest calendar" ON harvest_calendar
  FOR SELECT TO anon
  USING (true);

-- Allow authenticated users to view all data
CREATE POLICY "Allow authenticated users to view harvest calendar" ON harvest_calendar
  FOR SELECT TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO harvest_calendar (product_name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, best_month) VALUES
('Dehydrated Red & Pink Onion', 'Processing', 'Processing', 'Harvesting', 'Harvesting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting', 'Exporting', 'March-April'),
('Ajwain', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Nigella Seeds Black Cumin', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Fennel Seeds', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Hulled Sesame Seeds', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'Exporting', 'July-August'),
('Cumin Seeds', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Yellow Mustard Powder', 'Processing', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Refined Corn Oil', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Turmeric Powder', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Sesame Seeds', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'Exporting', 'July-August'),
('Black Sesame Seeds', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'Exporting', 'July-August'),
('Cumin Powder', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Turmeric', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Fenugreek Seeds', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Yellow Mustard Seeds', 'Processing', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Fenugreek Powder', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Refined Soyabean Oil', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Refined Cottonseed Oil', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Coriander Powder', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Red Chilli', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Filtered Groundnut Oil', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Dried Fenugreek Leaves', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Dill Seeds', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Dehydrated White Onion', 'Processing', 'Processing', 'Harvesting', 'Harvesting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Processing', 'Exporting', 'Exporting', 'March-April'),
('Mustard Expeller Oil', 'Processing', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Coriander Seeds', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Refined Sunflower Oil', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Cardamom', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Chilli Powder', 'Processing', 'Processing', 'Exporting', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'September-October'),
('Black Mustard Seeds', 'Processing', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'August-September'),
('Celery Seeds', 'Harvesting', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Maturing', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'January'),
('Flax Seeds', 'Processing', 'Exporting', 'Sowing', 'Growing', 'Growing', 'Maturing', 'Harvesting', 'Harvesting', 'Processing', 'Processing', 'Exporting', 'Exporting', 'July-August');
