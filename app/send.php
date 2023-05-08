
<?php
 //показываем форму
 $email = $_POST['email'];;
 $email = htmlspecialchars($email);
 $email = urldecode($email);
 $email = trim($email);
 if (mail("asorokin@lachestry.com", "Заявка с сайта Jadoo", "E-mail: ".$email."\n". "From: iiredii@mail.ru \r\n")){
 echo "Вы успешно подписались на новости";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
?>