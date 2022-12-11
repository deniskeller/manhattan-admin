 export const computedStr = (str: string) => {
	const newStr = str.trim().split('');
	return '<span>' + newStr.join('</span><span>') + '</span>';
};