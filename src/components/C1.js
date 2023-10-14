import { useState, useEffect } from "react";

function C1() {
	const [text, setText] = useState("");

	// word count
	const [wordCount, setWordCount] = useState("");

	const changeHandler = (e) => {
		setText(e.target.value);
	};
    useEffect(() => {
        const words = text.split(' ');
    
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount);
      }, [text]);
	return (
		<div
			class="bg-light text-dark mx-auto my-3 border"
			style={{ maxWidth: "600px", maxHeight: "500px" }}
		>
			<h1>Responsive Paragraph Word Counter</h1>
			<div
				class="bg-light text-dark mx-auto my-3"
				style={{ maxWidth: "500px", maxHeight: "500px" }}
			>
				<textarea
					value={text}
                    onChange={changeHandler}
					style={{ width: "500px", height: "250px" }}
				></textarea>
			</div>
			<p>
				Word count: <span class="bg-dark text-light">{wordCount}</span>
			</p>
		</div>
	);
}
export default C1;