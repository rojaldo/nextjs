import { myauth } from "./server-actions";


export default function Page() {
    return (
        <div className="container">
            <form action={myauth}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Passwrod</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>

            </form>
        </div>
    )
}