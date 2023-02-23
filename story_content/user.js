function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UmYoPqzd2A":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxLEGxEMxmnI1JQQE1XtZDeg45JtAN8qs7d8_OOR3WqX8JGwVvRML6Qs0-9QqQIkeLmhg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

