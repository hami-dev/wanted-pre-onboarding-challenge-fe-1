import React, {useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {Users} from 'api/User';
import {Utils} from 'utils';

import Container from 'components/common/Container';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import ButtonWrapper from 'components/common/ButtonWrapper';
import ErrorText from 'components/common/ErrorText';

const defaultValues = {
  email: '',
  password: '',
};

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors, isValid},
  } = useForm({reValidateMode: 'onChange', mode: 'onChange', defaultValues});

  const onSubmit = async (data) => {
    try {
      const res = await Users.createUser(data);
      Utils.saveLocalStorage('token', res.data.token);
      navigate(`/`);
    } catch (error) {
      window.alert('회원가입 오류 발생');
    }
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (Utils.isTokenExist()) {
      window.alert('이미 가입 되어있습니다. 메인화면으로 이동합니다.');
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Container title="회원가입" width="500">
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
          <ErrorText>{errors?.email?.message}</ErrorText>
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
          <ErrorText>{errors?.password?.message}</ErrorText>
          <ButtonWrapper align="center">
            <>
              {useMemo(
                () => (
                  <Button type="submit" className="blue large" disabled={!isValid} style={{width: '120px'}}>
                    가입하기
                  </Button>
                ),
                [isValid],
              )}
            </>
            <Button type="button" className="large" style={{width: '120px'}} onClick={onClickCancel}>
              취소
            </Button>
          </ButtonWrapper>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
