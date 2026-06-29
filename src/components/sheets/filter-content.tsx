import { RotateCcw } from "lucide-react"
import { Button } from "../ui/button"
import { Field, FieldGroup } from "../ui/field"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"

const FilterContent = () => {
  return (
    <div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">Filter</span>
            <Button variant="ghost" className="text-primary hover:text-primary">
              Reset <RotateCcw size={16} />
            </Button>
          </div>

          <hr />

          <div className="mt-4 space-y-2">
            <span className="font-medium text-lg font-manrope block">
              Crane type
            </span>

            <FieldGroup className="max-w-sm">
              <Field orientation="horizontal">
                <Checkbox
                  id="flat-top-tower-crane"
                  name="crane-type"
                  value="flat-top-tower-crane"
                />
                <Label
                  htmlFor="flat-top-tower-crane"
                  className="text-base font-normal text-[#414651]"
                >
                  Flat-top Tower Crane
                </Label>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="luffing-jib-crane"
                  name="crane-type"
                  value="luffing-jib-crane"
                />
                <Label
                  htmlFor="luffing-jib-crane"
                  className="text-base font-normal text-[#414651]"
                >
                  Luffing Jib Crane
                </Label>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="hammerhead-crane"
                  name="crane-type"
                  value="hammerhead-crane"
                />
                <Label
                  htmlFor="hammerhead-crane"
                  className="text-base font-normal text-[#414651]"
                >
                  Hammerhead Crane
                </Label>
              </Field>
            </FieldGroup>
          </div>

          <div className="mt-4 space-y-2">
            <span className="font-medium text-lg font-manrope block">
              Lifting capacity
            </span>
                <FieldGroup className="max-w-sm">
                  <Field orientation="horizontal">
                    <Checkbox
                      id="up-to-10-ton"
                      name="lifting-capacity"
                      value="up-to-10-ton"
                    />
                    <Label
                      htmlFor="up-to-10-ton"
                      className="text-base font-normal text-[#414651]"
                    >
                      Up to 10 ton
                    </Label>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox
                      id="10-20-ton"
                      name="lifting-capacity"
                      value="10-20-ton"
                    />
                    <Label
                      htmlFor="10-20-ton"
                      className="text-base font-normal text-[#414651]"
                    >
                      10-20 ton
                    </Label>
                  </Field>
                </FieldGroup>
          </div>
        </div>
  )
}

export default FilterContent;