type Props={
  dates:string[]
}

export default function HistoryList({dates}:Props){

  return(

    <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

      <h2 className="text-2xl font-bold mb-4">
        Study History
      </h2>

      <ul className="space-y-2">

        {dates.map((d,i)=>(
          <li key={i} className="border p-2 rounded">
            📅 {d}
          </li>
        ))}

      </ul>

    </div>

  )

}