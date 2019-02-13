import { book as theme } from "mdx-deck/themes";

import style from "react-syntax-highlighter/styles/prism/darcula";

import rust from "react-syntax-highlighter/languages/prism/rust";
import go from "react-syntax-highlighter/languages/prism/go";
import csharp from "react-syntax-highlighter/languages/prism/csharp";
import scala from "react-syntax-highlighter/languages/prism/scala";
import elm from "react-syntax-highlighter/languages/prism/elm";
import haskell from "react-syntax-highlighter/languages/prism/haskell";
import reason from "react-syntax-highlighter/languages/prism/reason";
import css from "react-syntax-highlighter/languages/prism/css";
import typescript from "react-syntax-highlighter/languages/prism/typescript";

export default {
  ...theme,
  prism: {
    style,
    languages: {
      rust,
      go,
      csharp,
      scala,
      elm,
      haskell,
      reason,
      css,
      typescript
    }
  },
};
