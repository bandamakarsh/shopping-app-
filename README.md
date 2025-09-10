<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creational Design Patterns - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #222;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 6px;
      overflow-x: auto;
    }
    .section {
      margin-bottom: 25px;
      padding: 15px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    a {
      color: #0077cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>Creational Design Patterns in Web Applications</h1>

  <div class="section">
    <h2>📌 Student Details</h2>
    <p><b>Name:</b> Akarsh<br>
    <b>Roll No:</b> 2303A53018</p>
  </div>

  <div class="section">
    <h2>📌 Project Overview</h2>
    <p>This project demonstrates the implementation of <b>Creational Design Patterns</b> in different web application case studies using <b>HTML, CSS, and JavaScript</b>. The patterns implemented are:</p>
    <ul>
      <li>Singleton</li>
      <li>Factory Method</li>
      <li>Abstract Factory</li>
      <li>Builder</li>
      <li>Prototype</li>
    </ul>
  </div>

  <div class="section">
    <h2>📌 Case Studies</h2>
    <h3>1. Banking App – LoanFactory (Abstract Factory)</h3>
    <p>Factory: LoanFactory<br>
    Products: HomeLoan, CarLoan, EducationLoan<br>
    Description: Creates different types of loans with details like amount, interest rate, and tenure.</p>

    <h3>2. E-commerce App – ShippingFactory (Abstract Factory)</h3>
    <p>Factory: ShippingFactory<br>
    Products: StandardShipping, ExpressShipping, InternationalShipping<br>
    Description: Provides shipping methods with different costs and delivery times.</p>

    <h3>3. Ride-Hailing App – VehicleFactory (Abstract Factory)</h3>
    <p>Factory: VehicleFactory<br>
    Products: Bike, Auto, Car<br>
    Description: Creates vehicles with associated DriverProfile.</p>
  </div>

  <div class="section">
    <h2>📌 Implemented Patterns</h2>
    <ul>
      <li><b>Singleton:</b> Used for Cart / Session management.</li>
      <li><b>Factory Method:</b> Used for generating products (food items, loans, vehicles, etc.).</li>
      <li><b>Abstract Factory:</b> Used for creating families of related objects (Payments, Shipping, Vehicles, Loans).</li>
      <li><b>Builder:</b> Used for step-by-step construction (Pizza Builder / Custom Order).</li>
      <li><b>Prototype:</b> Used for cloning objects (duplicating an order).</li>
    </ul>
  </div>

  <div class="section">
    <h2>📌 Tech Stack</h2>
    <ul>
      <li>Frontend: HTML, CSS, JavaScript</li>
      <li>Version Control: Git</li>
      <li>Deployment: GitHub Pages</li>
    </ul>
  </div>

  <div class="section">
    <h2>📌 How to Run</h2>
    <pre><code>git clone https://github.com/&lt;your-username&gt;/creational-design-patterns.git
cd creational-design-patterns
open index.html</code></pre>
  </div>

  <div class="section">
    <h2>📌 Deployment</h2>
    <p>The project is deployed using <b>GitHub Pages</b>.<br>
    👉 <a href="https://&lt;your-username&gt;.github.io/creational-design-patterns/" target="_blank">View Live Demo</a></p>
  </div>

  <div class="section">
    <h2>📌 Screenshots</h2>
    <p>(Add screenshots of each pattern demo here)</p>
  </div>

  <div class="section">
    <h2>📌 Conclusion</h2>
    <p>This project enhanced my understanding of <b>Creational Design Patterns</b> and their real-world applications. Implementing Singleton, Factory, Abstract Factory, Builder, and Prototype in web applications demonstrated how these patterns improve <b>reusability, maintainability, and scalability</b>.</p>
  </div>

</body>
</html>
