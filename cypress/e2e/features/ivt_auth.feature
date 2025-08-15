Feature: Authentification FreeWheel

  Scenario: Connexion avec identifiants valides
    Given je suis sur la page de connexion FreeWheel
    When je me connecte avec des identifiants valides
    Then je suis redirigé vers le tableau de bord
