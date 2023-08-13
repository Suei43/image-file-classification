import LeftSideBar from "./Reusable/LeftSideBar"
import Recent from "./Reusable/Recent"
import Search from "./Reusable/Search"

export default function Files() {
    return (
        <div className="flex flex-row w-full bg-slate-200 justify-center min-h-screen" >
            <LeftSideBar/>
            <div className="flex flex-col w-10/12 py-8 items-center relative">
                <Search/>
                <div className="w-full min-h-full">
                    <Recent title={'All Files'}/>
                </div>
            </div>
        </div>
    )
}