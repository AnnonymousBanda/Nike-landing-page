const CustomerCard = ({customerName, imgURL, feedback}) => {
  return (
    <div className="flex flex-col items-center text-center py-[10rem]">
        <img src={imgURL} alt="customer profile pic" className="w-[120px] h-[120px] rounded-full"/>
        <p className="font-palanquin text-b text-slate-gray ">{feedback}</p>
        <p className="font-bold font-montserrat text-sh">{customerName}</p>
    </div>
  )
}

export default CustomerCard
