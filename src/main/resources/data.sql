SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE usuarios;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO usuarios (username, password)
VALUES
('dragonMaster', '$2a$10$GK0tTTC/MbxDlEJcfqDKTe39Efa1LK6bxcBIbZHT1hhruTwrNNAnC'),
('mageQueen', '$2a$10$XPsvO95K5Xy1KjzvV.EZGuKJz7AjP8bbjZ1q7l0sQYxYd.ohP6gR6');