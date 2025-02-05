
const FixSyntaxErrorsFunctional = (props) => {

    return (
        <div className="errors-in-programming-container">
            <h1 tabIndex={0}>Errors in Programming</h1>
            <p tabIndex={0}>Everyone makes mistakes, including programmers!</p>
            <ul tabIndex={0}>
                <li>Syntax Errors: These occur when the code is written incorrectly, and the compiler is unable to understand it. Examples include missing semicolons, quotes, or parentheses.</li>
                <li>Logic Errors: These occur when the code is written correctly, but does not produce the expected result.</li>
                <li>Run-time Errors: These occur when the code is executed, and something unexpected happens, such as a division by zero error.</li>
            </ul>
            <p tabIndex={0}>The key to fixing errors is to identify the cause, and then make the necessary corrections. This can involve using debugging tools, or simply carefully reading the code and understanding what is happening.
            </p>
        </div>
    );

}

export default FixSyntaxErrorsFunctional;

