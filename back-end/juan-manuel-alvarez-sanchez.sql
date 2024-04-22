-- -------------------------------------------------------------
-- TablePlus 5.9.6(546)
--
-- https://tableplus.com/
--
-- Database: tendencys
-- Generation Time: 2024-04-22 11:28:05.5270
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


INSERT INTO `access_tokens` (`user_id`, `token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, '8af188fb1b693a0f30ca40a2634208be6753d79e36e48bf5351cce83c324e9c0', '2024-04-19 16:55:06', '2024-04-19 16:55:06', NULL);

INSERT INTO `catalog_products` (`catalog_product_id`, `name`, `description`, `height`, `length`, `width`, `created_at`, `updated_at`, `thumbnail`) VALUES
(1, 'iPhone 9', 'An apple mobile which is nothing like apple', 0.80, 15.20, 7.50, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'),
(2, 'iPhone X', 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...', 0.70, 14.90, 7.30, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'),
(3, 'Samsung Universe 9', 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 0.90, 16.50, 8.00, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg'),
(4, 'OPPOF19', 'OPPO F19 is officially announced on April 2021.', 0.80, 15.00, 7.20, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg'),
(5, 'Huawei P30', 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.', 0.70, 15.70, 7.40, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg'),
(6, 'MacBook Pro', 'MacBook Pro 2021 with mini-LED display may launch between September, November', 1.60, 30.40, 21.20, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/6/thumbnail.png'),
(7, 'Samsung Galaxy Book', 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched', 1.40, 30.80, 21.90, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg'),
(8, 'Microsoft Surface Laptop 4', 'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.', 1.50, 30.10, 20.50, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg'),
(9, 'Infinix INBOOK', 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty', 1.70, 32.00, 22.50, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg'),
(10, 'HP Pavilion 15-DK1056WM', 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10', 2.00, 35.00, 23.80, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg'),
(11, 'perfume Oil', 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil', 3.00, 10.00, 5.00, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg'),
(12, 'Brown Perfume', 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml', 3.50, 10.50, 5.50, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg'),
(13, 'Fog Scent Xpressio Perfume', 'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men', 3.20, 11.20, 6.00, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/13/thumbnail.webp'),
(14, 'Non-Alcoholic Concentrated Perfume Oil', 'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil', 2.80, 9.80, 4.80, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg'),
(15, 'Eau De Perfume Spray', 'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality', 2.50, 9.60, 4.50, '2024-04-22 09:32:06', '2024-04-22 09:32:06', 'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg');

INSERT INTO `users` (`user_id`, `name`, `phone`, `img_profile`, `created_at`, `updated_at`) VALUES
(5, 'Juan Manuel', '8184642850', NULL, '2024-04-19 22:53:53', '2024-04-19 22:53:53');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;