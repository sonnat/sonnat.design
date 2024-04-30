import type { Schema, LeafChild, ChildSchema } from "nav-schema";

type LabelType = { en: string; fa: string };
type ParentTreeType = { label: LabelType }[];

export type SearchReturnType = {
  label: LabelType;
  href: string;
  parents: ParentTreeType;
}[];

const search = (schema: Schema, key: string = ""): SearchReturnType => {
  const searchMechanic = (
    schema: Schema | ChildSchema,
    key: string,
    parentTree: ParentTreeType = []
  ): SearchReturnType => {
    let results: SearchReturnType = [];
    const parents = [...parentTree];

    if (schema.children && schema.children.length > 0) {
      results = schema.children.reduce((output: SearchReturnType, child) => {
        const childSchema = schema.byChild[child.en];

        if (!childSchema) return output;

        const isLeaf =
          !(childSchema as unknown as ChildSchema).children ||
          (childSchema as unknown as ChildSchema).children.length === 0;

        if (isLeaf) {
          if (
            childSchema.label.en.toLowerCase().indexOf(key.toLowerCase()) !==
              -1 ||
            childSchema.label.fa.indexOf(key) !== -1
          ) {
            return [
              ...output,
              {
                label: (childSchema as unknown as LeafChild).label,
                href: (childSchema as unknown as LeafChild).href,
                parents
              }
            ];
          } else return output;
        } else
          return [
            ...output,
            ...searchMechanic(childSchema as ChildSchema, key, [
              ...parentTree,
              { label: childSchema.label }
            ])
          ];
      }, []);
    }

    return results;
  };

  return searchMechanic(schema, key);
};

export default search;
