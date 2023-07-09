import * as S from "./styles";

interface RadioGroupProps {
  radios: Array<{
    name: string;
    value: string;
    label: string;
  }>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function RadioGroup({
  radios,
  label,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <S.Container>
      <S.RadioLabel>{label}</S.RadioLabel>
      <S.Content>
        {radios.map((radio) => (
          <S.Wrapper key={radio.name}>
            <input
              type="radio"
              id={radio.label}
              name={radio.name}
              value={radio.value}
              checked={radio.value === value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={radio.label}>{radio.label}</label>
          </S.Wrapper>
        ))}
      </S.Content>
    </S.Container>
  );
}
