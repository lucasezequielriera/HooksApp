import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {
    const {counter, increment} = useCounter(1);
    const {data, isLoading} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote loadingMessage={'Loading...'}/>
                : <Quote author={author} quote={quote} />
            }

            <button className="btn btn-primary"
            disabled={isLoading}
            onClick={() => increment(1)}>
                Next quote
            </button>
        </>
    )
}
