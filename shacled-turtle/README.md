# Shacled Turtle

A [Code Mirror 6](https://codemirror.net/6/) Turtle language support that
provides autocompletion based of the content of an RDFS/SHACL graph.

## How to use

You can use this extension like any other Code Mirror 6 extension.

```typescript
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import shacledTurtle from "shacled-turtle";
import * as n3 from "n3";

const { shacledTurtleExtension, changeOntology } = shacledTurtle();

new EditorView({
  parent: parent,
  state: EditorState.create({
    doc: document.getElementById("editorparent")!,
    extensions: [basicSetup, shacledTurtleExtension]
  })
});

const shapeGraph = `
  prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  prefix sh: <http://www.w3.org/ns/shacl#>
  prefix xsd: <http://www.w3.org/2001/XMLSchema#>
  prefix owl: <http://www.w3.org/2002/07/owl#>
  prefix ex: <http://example.com/ns#>
  prefix s: <http://schema.org/>

  ex:PersonShape a sh:NodeShape ;
    sh:targetClass s:Person ;
    sh:property [ sh:path s:name ] .
`;

changeOntology(new n3.Parser().parse(shapeGraph));
```

On the code editor, copy the prefixes
```
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix sh: <http://www.w3.org/ns/shacl#>
prefix xsd: <http://www.w3.org/2001/XMLSchema#>
prefix owl: <http://www.w3.org/2002/07/owl#>
prefix ex: <http://example.com/ns#>
prefix s: <http://schema.org/>
```

Now, type `ex:Alice r`, the editor suggests `rdf:type` then `s:Person`.

After `ex:Alice rdf:type s:Person . `, write `ex:alice s` and the engine
will suggest `s:name` because it knows Alice is a person.


## License

Published under the MIT License by Julian Bruyat / INSA Lyon.