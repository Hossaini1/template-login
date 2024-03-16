import { useNavigate } from "react-router-dom"

function NotFoundPage() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h2>ERROR 404 , die Page wurde nicht gefunden!</h2>
      <button onClick={handleClick}>Zurück zue Startseite</button>
    </div>
    
  )
}
export default NotFoundPage