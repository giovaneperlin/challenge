export default class StringFormatter {
  constructor() {}

  // public format(input: string) {
  //   let final = "";
  //   let isMod3EqualsTo1 = true;

  //   if (!(/^[a-zA-Z0-9\- ]{2,100}$/).test(input)) {
  //     throw new Error();
  //   }

  //   let splittedInput = input.match(/[a-zA-Z0-9]/g);
  //   if (splittedInput && splittedInput.length >= 2) {
  //     isMod3EqualsTo1 = splittedInput.length % 3 === 1;

  //     final = this.transform(splittedInput, isMod3EqualsTo1, final);

  //     return final;
  //   } else {
  //     throw new Error();
  //   }
  // }

  // private transform(splittedInput: RegExpMatchArray, isMod3EqualsTo1: boolean, final: string) {
  //   for (let i = 0; i < splittedInput.length; i++) {
  //     const indexIsLastFourOrMod3EqualsTo1 = !isMod3EqualsTo1 || i < splittedInput.length - 3;
  //     if (indexIsLastFourOrMod3EqualsTo1) {
  //       const indexNot0AndMultipleOf3 = i % 3 === 0 && i !== 0;
  //       if (indexNot0AndMultipleOf3) {
  //         final+= " ";
  //       }
  //       final+= splittedInput[i];
  //     } else {
  //       if (i % 2 === 0) {
  //         final+= " " + splittedInput[i];
  //       } else {
  //         final+= splittedInput[i];
  //       }
  //     }
  //   }
  //   return final;
  // }

  format(wordToUse: string) {
    if (!/^[a-zA-Z0-9\- ]{2,100}$/.test(wordToUse)) {
      throw new Error();
    }

    let splittedInput = wordToUse.match(/[a-zA-Z0-9]/g);
    if (splittedInput && splittedInput.length >= 2) {
      if (wordToUse) {
        let treatments = wordToUse
          .replace(/-/g, "")
          .split(" ")
          .join("")
          .match(/.{1,3}/g);
        if (treatments) {
          const arrayLength = treatments.length;
          if (treatments[arrayLength - 1].length === 1) {
            const lastWord = treatments[arrayLength - 1];
            const penultimateWord = treatments[arrayLength - 2];
            treatments[arrayLength - 1] = `${penultimateWord.substr(
              penultimateWord.length - 1
            )}${lastWord}`;
            treatments[arrayLength - 2] = `${penultimateWord.substr(
              0,
              penultimateWord.length - 1
            )}`;
          }

          return treatments.join(" ");
        }
      }
    } else {
      throw new Error();
    }
  }
}
