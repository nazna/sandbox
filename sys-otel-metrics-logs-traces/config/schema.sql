CREATE TABLE
  IF NOT EXISTS dice (
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    side INTEGER NOT NULL,
    value INTEGER NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    PRIMARY KEY (id)
  );

CREATE INDEX dice_side_idx ON dice (side);

INSERT INTO
  dice (side, value)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6);
