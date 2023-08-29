const Navigation = () => {
    return (
        <>
            <nav className="flex flex-row bg-slate-300">
                <div className="basis-1/12">
                    <ul className="flex justify-around">
                        <li className="py-6 hover:text-gray-100"><a href="#">Home</a></li>
                    </ul>
                </div>
                <div className="basis-11/12">
                    <ul className="flex justify-end">
                        <li className="py-6 mr-20 hover:text-gray-100"><a href="#">Products</a></li>
                        <li className="py-6 mr-20 hover:text-gray-100"><a href="#">Segments</a></li>
                        <li className="py-6 mr-20 hover:text-gray-100"><a href="#">Subscriptions</a></li>
                        <li className="py-6 mr-20 hover:text-gray-100"><a href="#">About</a></li>
                        <li className="py-6 hover:text-gray-100"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;