CREATE TABLE
  IF NOT EXISTS places (
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(64) NOT NULL,
    prefecture VARCHAR(64) NOT NULL,
    city VARCHAR(64) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    ts tsvector GENERATED ALWAYS AS (
      to_tsvector (
        'simple',
        name || ' ' || prefecture || ' ' || city || ' ' || 'all'
      )
    ) STORED,
    PRIMARY KEY (id)
  );

CREATE INDEX idx_ts ON places USING GIN (ts);

INSERT INTO
  places (name, prefecture, city)
VALUES
  ('N Main Street', 'Idaho', 'Lake Holdenhaven'),
  ('Hartmann Views', 'Oregon', 'Port Wilbert'),
  (
    'Wilkinson Square',
    'Virginia',
    'North Johannaland'
  ),
  ('Carter Parks', 'West Virginia', 'Lake Trystan'),
  ('The Coppice', 'Georgia', 'Andersonstead'),
  ('Luettgen Neck', 'Nebraska', 'Carrollberg'),
  ('The Copse', 'Arkansas', 'Gleichnerland'),
  ('Lina Valleys', 'Arkansas', 'Stokesstad'),
  ('E North Street', 'Montana', 'Izabellastead'),
  ('Fore Street', 'Wisconsin', 'Kemmerbury'),
  ('Kunze Spur', 'Virginia', 'Murray');
