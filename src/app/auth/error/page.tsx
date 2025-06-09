export default function ErrorPage() {
    return (
        <div className="h-[100vh] w-full flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col blbg rounded-2xl p-10">
                <h1 className="text-2xl font-semibold">Error</h1>
                <p className="text-md mt-5">
                    An error occured, please try again.
                </p>
            </div>
        </div>
    )
}