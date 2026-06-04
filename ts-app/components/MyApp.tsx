function MyButton({ id, title }:
    { id: number, title: string }) {
    return (
        <div>
            <button>
                {id} {title}
            </button>
        </div>
    );
}
export default function MyApp() {
    return (
        <div>
            <h1>MyApp</h1>
            <MyButton id={1} title="ButtonTs" />
        </div>
    );
}