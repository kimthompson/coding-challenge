// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const toRna = (dna) => {
  let rna = dna.split('');

  const rnaReducer = (acc, element) => {
    if (element === "C") return `${acc}G`
    if (element === "G") return `${acc}C`
    if (element === "T") return `${acc}A`
    if (element === "A") return `${acc}U`
    return `${acc}${element}`
  }

  return rna.reduce(rnaReducer, '')
};
