import HeadText from "../../atoms/headDescription/Index"
import HeadTextDescription from "../../atoms/description/Index"

export default function Intro( { head, desc, color} ) {

  if(color==undefined){color=''}

  return (
    <div className="text-center mt-5">
      <HeadText head={head} color={color}/>
      <HeadTextDescription desc={desc} color={color}/>
    </div>
  )
}
