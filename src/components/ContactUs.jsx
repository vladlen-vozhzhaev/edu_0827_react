export function ContactUs(){
    return (
        <div className="col-sm-6 mx-auto py-5">
            <h1 className="text-center my-3">Связаться с нами</h1>
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}