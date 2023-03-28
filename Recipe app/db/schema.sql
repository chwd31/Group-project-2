-- Step 1: Create the recipe_db database (if it doesn't exist)
DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

USE recipe_db;

-- Step 2: Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER auto_increment,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Step 3: Create the recipes table
CREATE TABLE IF NOT EXISTS `recipes` (
  `recipe_id` INTEGER AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `ingredients` TEXT NOT NULL,
  `directions` TEXT NOT NULL,
  `user_id` INTEGER,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`recipe_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Step 4: Create the comments table
CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` INTEGER auto_increment,
  `text` TEXT NOT NULL,
  `user_id` INTEGER,
  `recipe_id` INTEGER,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`comment_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
