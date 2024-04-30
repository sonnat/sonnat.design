import { DependencyList, useMemo } from "react";

type NormalizedResult = {
  bySegment: { [P: string]: any };
  allSegments: string[];
};

export default function useAdjustments(
  inputAdjustments: { [P: string]: any },
  dependencies?: DependencyList
) {
  return useMemo<NormalizedResult>(
    () => {
      const normalizedResult: NormalizedResult = Object.keys(
        inputAdjustments
      ).reduce(
        (result: NormalizedResult, adj: string) => {
          return {
            ...result,
            bySegment: {
              ...result.bySegment,
              [adj]: inputAdjustments[adj]
            },
            allSegments: [...result.allSegments, adj]
          };
        },
        {
          bySegment: {},
          allSegments: []
        }
      );

      return normalizedResult;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dependencies]
  );
}
