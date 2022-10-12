function Patient(){

    return(
        <div className="flex justify-between w-full items-center">
            <div>
                <p className="text-2xl text-blue-800 m-auto">Patient Scan</p>
            </div>
            <div className="flex">
                <div className="px-4">
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:text-blue-900 hover:bg-blue-200">View All Patients</button>
                </div>
                <div>
                    <button className="bg-purple-800 text-white px-4 py-2 rounded-md hover:text-purple-900 hover:bg-purple-200">+ Add Patient</button>
                </div>
            </div>
        </div>
    )

}

export default Patient;
