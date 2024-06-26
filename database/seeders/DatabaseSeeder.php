<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => '1',
            'is_admin' => true
        ]);

        Product::create([
            'name' => 'iPhone 5',
            'description' => 'Description of the product iPhone 5',
            'price' => 500,
            'quantity' => 1
        ]);

        Product::create([
            'name' => 'iPhone 6',
            'description' => 'Description of the product iPhone 6',
            'price' => 600,
            'quantity' => 2
        ]);

        Product::create([
            'name' => 'iPhone 7',
            'description' => 'Description of the product iPhone 7',
            'price' => 700,
            'quantity' => 3
        ]);

        Product::create([
            'name' => 'iPhone 8',
            'description' => 'Description of the product iPhone 8',
            'price' => 800,
            'quantity' => 4
        ]);

        Product::create([
            'name' => 'iPhone 10',
            'description' => 'Description of the product iPhone 10',
            'price' => 900,
            'quantity' => 5
        ]);

        Product::create([
            'name' => 'iPhone 11',
            'description' => 'Description of the product iPhone 11',
            'price' => 1000,
            'quantity' => 6
        ]);

        Product::create([
            'name' => 'iPhone 12',
            'description' => 'Description of the product iPhone 12',
            'price' => 1100,
            'quantity' => 7
        ]);

        Product::create([
            'name' => 'iPhone 13',
            'description' => 'Description of the product iPhone 13',
            'price' => 1200,
            'quantity' => 8
        ]);

        Product::create([
            'name' => 'iPhone 14 Pro Max',
            'description' => 'Description of the product iPhone 14 Pro Max',
            'price' => 1300,
            'quantity' => 9
        ]);

        Order::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'phone' => '123456789',
            'comment' => 'Comment',
            'products_id' => '1',
            'confirmed' => false
        ]);

        Order::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'phone' => '123456789',
            'comment' => 'Comment',
            'products_id' => '2, 3',
            'confirmed' => false
        ]);

        Order::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'phone' => '123456789',
            'comment' => 'Comment',
            'products_id' => '4, 5, 6',
            'confirmed' => false
        ]);

        for ($i = 1; $i <= 3; $i++) {
            Project::factory()->create([
                'name' => "Проект {$i}",
            ]);
        }

        Task::factory()->create([
            'name' => "Задача 1",
            'description' => "Опис задачі 1",
            'project_id' => 1,
            'completed' => true
        ]);
        Task::factory()->create([
            'name' => "Задача 2",
            'description' => "Опис задачі 2",
            'project_id' => 1,
            'completed' => true
        ]);
        Task::factory()->create([
            'name' => "Задача 3",
            'description' => "Опис задачі 3",
            'project_id' => 1,
            'completed' => true
        ]);

        Task::factory()->create([
            'name' => "Задача 4",
            'description' => "Опис задачі 4",
            'project_id' => 2,
            'completed' => false
        ]);
        Task::factory()->create([
            'name' => "Задача 5",
            'description' => "Опис задачі 5",
            'project_id' => 2,
            'completed' => false
        ]);
        Task::factory()->create([
            'name' => "Задача 6",
            'description' => "Опис задачі 6",
            'project_id' => 2,
            'completed' => false
        ]);

        Task::factory()->create([
            'name' => "Задача 7",
            'description' => "Опис задачі 7",
            'project_id' => 3,
            'completed' => true
        ]);
        Task::factory()->create([
            'name' => "Задача 8",
            'description' => "Опис задачі 8",
            'project_id' => 3,
            'completed' => false
        ]);
        Task::factory()->create([
            'name' => "Задача 9",
            'description' => "Опис задачі 9",
            'project_id' => 3,
            'completed' => true
        ]);

    }
}
