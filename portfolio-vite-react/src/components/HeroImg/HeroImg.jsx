import ExamKYH from "../../assets/ExamKYH.png"
import "./HeroImg.css"

const HeroImg = () => {
  return (
    <section>
      <div>
        <div className="img-section">
            <div>
              <img className="work-img"src={ExamKYH} alt="Workproject"/>
            </div>
            <div>
              <img className="work-img"src={ExamKYH} alt=""/>
            </div>
            <div>
              <img className="bigger-img" src={ExamKYH} alt=""/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroImg