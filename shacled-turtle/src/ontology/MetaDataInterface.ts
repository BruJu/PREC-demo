import TermSet from "@rdfjs/term-set";
import * as RDF from "@rdfjs/types";

/** Storage for the list of types and shapes of all resources */
export interface MetaBaseInterface {
  /** List of types */
  types: MetaBaseInterfaceComponent;
  /** List of shapes */
  shapes: MetaBaseInterfaceComponent;
}

/**
 * Storage for the list of a things of all resources
 */
export interface MetaBaseInterfaceComponent {
  /** Add a type to the resource */
  add(resource: RDF.Term, classifier: RDF.Term): boolean;
  /** Return the set of all types for a given resource */
  getAll(resource: RDF.Term): TermSet<RDF.Term>;
}
