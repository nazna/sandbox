CREATE TABLE `user`
(
  `user_id`    INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ユーザーID',
  `name`       VARCHAR(16)  NOT NULL COMMENT '名前',
  `created_at` DATETIME(3)  NOT NULL DEFAULT NOW(3) COMMENT '作成日時',
  `updated_at` DATETIME(3)  NOT NULL DEFAULT NOW(3) ON UPDATE NOW(3) COMMENT '更新日時',
  `deleted_at` DATETIME(3)  NULL     DEFAULT NULL COMMENT '削除日時',
  PRIMARY KEY (`user_id`),
  INDEX idx_user_id_deleted_at (`user_id`, `deleted_at`)
) ENGINE = InnoDB COMMENT 'ユーザーテーブル';
