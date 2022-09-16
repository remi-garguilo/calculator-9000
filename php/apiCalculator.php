<?php
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

    define("DBHOST", "localhost");
    define("DBUSER", "root");
    define("DBPASS", "root");
    define("DBNAME", "calculator9000");
    $req_body = file_get_contents('php://input');
    $data = json_decode($req_body, true);
    $calcul = (STRING) $data['nombres'];
    $result = $data['result'];

    $dsn = "mysql:dbname=" . DBNAME . ";host=" . DBHOST;
    try {
        $bdd = new PDO($dsn, DBUSER, DBPASS);
        $bdd->exec("SET NAMES utf8");
        $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,  PDO::FETCH_ASSOC);
        $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Erreur de connexion a la base: " . $e->getMessage());
    }
    $req = "INSERT INTO `calculs`( `calcul`, `resultat`) VALUES (:nombres, :result)";
    $requete_res = $bdd->prepare($req);
    $requete_res -> execute([
        ":nombres" => $calcul,
        ":result" => $result
    ]);
?>