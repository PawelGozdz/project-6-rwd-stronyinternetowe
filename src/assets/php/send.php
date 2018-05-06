<?php
function is_ajax() {
return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}
if(is_ajax()){
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      $header = 'From: ' . $email . " \r\n";
      $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
      $header .=  "Mime-Version: 1.0  \r\n";
      $header .= ("Content-Type: text/html; charset=UTF-8"); 
      $body = "Name: " . $name . "  \r\n";
      $body .= "Email:" . $email . " \r\n";
      $body .= "Treść wiadomości:" . $message . " \r\n";

      $body .= "Wysłano wiadomość";

      $for = "kontakt@rwd-stronyinternetowe.pl";
      $subject = "Zapytanie!";
      mail($for, $subject, utf8_encode($body), $header);
      // respuesta al servidor
      echo json_encode(array(
         'message' => 'Wiadomość wysłana!',
         'name'   => $name,
      ));
} else {
  die("NO!!!");
}