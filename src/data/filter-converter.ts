type CapacityCondition = {
  main_section: {
    crane_capacity: {
      $gte?: number;
      $lte?: number;
    };
  };
};

export const capacityConditions = (values: string[]): CapacityCondition[] =>
  values.flatMap<CapacityCondition>((value) => {
    switch (value) {
      case "up-to-10":
        return [
          {
            main_section: {
              crane_capacity: {
                $lte: 10,
              },
            },
          },
        ];

      case "10-20":
        return [
          {
            main_section: {
              crane_capacity: {
                $gte: 10,
                $lte: 20,
              },
            },
          },
        ];

      case "20-30":
        return [
          {
            main_section: {
              crane_capacity: {
                $gte: 20,
                $lte: 30,
              },
            },
          },
        ];

      case "30-40":
        return [
          {
            main_section: {
              crane_capacity: {
                $gte: 30,
                $lte: 40,
              },
            },
          },
        ];

      case "40-plus":
        return [
          {
            main_section: {
              crane_capacity: {
                $gte: 40,
              },
            },
          },
        ];

      default:
        return [];
    }
  });

type RadiusCondition = {
  main_section: {
    max_working_radius: {
      $gte?: number;
      $lte?: number;
    };
  };
};

export const radiusConditions = (values: string[]): RadiusCondition[] =>
  values.flatMap<RadiusCondition>((value) => {
    switch (value) {
      case "up-to-50":
        return [
          {
            main_section: {
              max_working_radius: {
                $lte: 50,
              },
            },
          },
        ];

      case "50-70":
        return [
          {
            main_section: {
              max_working_radius: {
                $gte: 50,
                $lte: 70,
              },
            },
          },
        ];

      case "70-90":
        return [
          {
            main_section: {
              max_working_radius: {
                $gte: 70,
                $lte: 90,
              },
            },
          },
        ];

      case "90-plus":
        return [
          {
            main_section: {
              max_working_radius: {
                $gte: 90,
              },
            },
          },
        ];

      default:
        return [];
    }
  });
