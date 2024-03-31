DROP TABLE IF EXISTS `ema`.`users`;

CREATE TABLE `ema`.`users`
(
  `user_id`        INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ユーザーID',
  `name`           VARCHAR(32)  NOT NULL COMMENT '名前',
  `created_at`     DATETIME(3)  NOT NULL DEFAULT NOW(3) COMMENT '作成日時',
  `updated_at`     DATETIME(3)  NOT NULL DEFAULT NOW(3) ON UPDATE NOW(3) COMMENT '更新日時',
  `deleted_at`     DATETIME(3)  NULL     DEFAULT NULL COMMENT '削除日時',
  `deleted_reason` VARCHAR(512) NULL     DEFAULT NULL COMMENT '削除理由',
  PRIMARY KEY (`user_id`)
) ENGINE = InnoDB COMMENT 'ユーザーテーブル';
