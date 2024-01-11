<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chart.js Example</title>
    <!-- Include Chart.js from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div style="width:80%; margin:auto;">
        <!-- Create a canvas element where the chart will be rendered -->
        <canvas id="myChart"></canvas>
    </div>

    <script>
        // Sample data for the bar chart
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56],
            }]
        };

        // Configuration options
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // Get the canvas element
        var ctx = document.getElementById('myChart').getContext('2d');

        // Create the bar chart
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    </script>
</body>
</html>
