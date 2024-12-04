<?php
if (isset($_GET['game'])) {
    $game = $_GET['game'];
    $orderAsc = $_GET['orderAsc'] ?? 1; // Orden ascendente por defecto

    // Consulta a la API
    $apiUrl = "http://primosoft.com.mx/games/api/getscores.php?game=$game&orderAsc=$orderAsc";
    $response = file_get_contents($apiUrl);
    $scores = json_decode($response, true);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scores - <?= htmlspecialchars($game) ?></title>
</head>
<body>
    <h1>Puntajes de <?= htmlspecialchars($game) ?></h1>
    <ul>
        <?php if (!empty($scores)): ?>
            <?php foreach ($scores as $score): ?>
                <li><?= htmlspecialchars($score['player']) ?>: <?= htmlspecialchars($score['score']) ?></li>
            <?php endforeach; ?>
        <?php else: ?>
            <li>No hay puntajes disponibles</li>
        <?php endif; ?>
    </ul>
</body>
</html>
