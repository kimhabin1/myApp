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
export default function MyAppTs() {
    return (
        <div>
            <h1>MyAppTs</h1>
            <MyButton id={2} title="ButtonTs" />
        </div>
    );
}