import "../sass/Form.scss";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  cardHolder: z
    .string()
    .min(5, { message: "Must be at least 5 characters" })
    .max(30, { message: "Must be at most 30 characters" }),
  cardNumber: z.string().regex(/(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/g, {
    message: "Wrong format, numbers only with spaces between them",
  }),
  mm: z
    .number({ invalid_type_error: "Invalid number" })
    .min(1, { message: "Invalid month" })
    .max(12, { message: "Invalid month" }),
  yy: z
    .number({ invalid_type_error: "Invalid number" })
    .min(10, { message: "Year must be greater than 2010" })
    .max(60, { message: "Year must be less than or equal to 2060" }),
  cvc: z
    .number({ invalid_type_error: "Invalid number" })
    .min(100, { message: "cvc numbers should be more than or equal to 100" })
    .max(999, { message: "cvc numbers should be less than or equal to 999" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = () => {};

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <label htmlFor="cardholder">CARDHOLDER NAME</label>
        <input
          {...register("cardHolder")}
          type="text"
          id="cardholder"
          placeholder="e.g. Jane Appleseed"
          required
        />
        {errors.cardHolder && (
          <p className="err">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="formGroup">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          {...register("cardNumber")}
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
        {errors.cardNumber && (
          <p className="err">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="lastOne">
        <div className="left">
          <label htmlFor="date">
            Exp. Date <span>(MM/YY)</span>
          </label>
          <div>
            <div>
              <input
                {...register("mm", { valueAsNumber: true })}
                type="text"
                id="date"
                placeholder="MM"
                required
              />
              {errors.mm && <p className="err">{errors.mm.message}</p>}
            </div>
            <div>
              <input
                {...register("yy", { valueAsNumber: true })}
                type="text"
                id="date"
                placeholder="YY"
                required
              />
              {errors.yy && <p className="err">{errors.yy.message}</p>}
            </div>
          </div>
        </div>
        <div className="right">
          <label htmlFor="cvc">CVC</label>
          <div>
            <input
              {...register("cvc", { valueAsNumber: true })}
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              required
            />
            {errors.cvc && <p className="err">{errors.cvc.message}</p>}
          </div>
        </div>
      </div>
      <button className="confirmBtn">Confirm</button>
    </form>
  );
};

export default Form;
