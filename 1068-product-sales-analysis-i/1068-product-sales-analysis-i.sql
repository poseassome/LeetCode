# Write your MySQL query statement below
SELECT product.product_name, sales.year, sales.price FROM product, sales 
    WHERE product.product_id = sales.product_id;