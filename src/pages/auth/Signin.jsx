import React, {useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import Container from 'components/common/Container';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import ButtonWrapper from 'components/common/ButtonWrapper';

const defaultValues = {
  email: '',
  password: '',
};

const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors, isValid},
  } = useForm({reValidateMode: 'onChange', mode: 'onChange', defaultValues});

  const onSubmit = (data) => {
    // api 연결
  };

  const onClickSignUp = () => {
    navigate('/auth/signup');
  };

  return (
    <div>
      <Container title="로그인">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="email"
            {...register('email', {
              required: {
                value: true,
                message: '이메일을 입력해주세요.',
              },
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '올바른 이메일 형식을 입력해주세요.',
              },
            })}
          />
          <div>{errors?.email?.message}</div>
          <Input
            type="password"
            placeholder="password"
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
              minLength: {
                value: 8,
                message: '비밀번호는 8글자 보다 길어야 합니다.',
              },
            })}
          />
          <div>{errors?.password?.message}</div>
          <ButtonWrapper direction="column">
            <>
              {useMemo(
                () => (
                  <Button type="submit" className="blue large" disabled={!isValid} style={{width: '120px'}}>
                    로그인하기
                  </Button>
                ),
                [isValid],
              )}
            </>
            <Button type="button" className="textButton grayText" onClick={onClickSignUp}>
              아직 회원이 아니신가요?
            </Button>
          </ButtonWrapper>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
