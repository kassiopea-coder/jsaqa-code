Feature: GoToTheCinema test
    Scenario: Should book ticket
        Given user is on "/client/index.php" page
        When user choose day "3"
        When user choose movie "1" and movieTime "2"
        When user choose seats row "6" and seat "5"
        When user click book "button"
        Then user sees booking confirmation "Вы выбрали билеты:"

    Scenario: Should book  3 ticket
        Given user is on "/client/index.php" page
        When user choose day "5"
        When user choose movie "2" and movieTime "3"
        When user choose seats row "1" and seat "7"
        When user choose seats row "1" and seat "8"
        When user choose seats row "1" and seat "9"
        When user click book "button"
        Then user sees booking confirmation "Вы выбрали билеты:"

    Scenario: Should't book ticket
        Given user is on "/client/index.php" page
        When user choose day "2"
        When user choose movie "1" and movieTime "3"
        Then user sees the header "Зверополис"
        Then user sees "button" is not clickable