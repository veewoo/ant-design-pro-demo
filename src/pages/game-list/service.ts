import { request } from 'umi';
import type { BasicListItemDataType, GameListItemDataType } from './data.d';

type ParamsType = {
  count?: number;
} & Partial<BasicListItemDataType>;

export async function queryFakeList(
  params: ParamsType,
): Promise<{ data: { list: GameListItemDataType[] } }> {
  const response = await request('https://62846fb03060bbd34738c11d.mockapi.io/api/games');
  console.log({ response });

  return { data: { list: response } };
}

export async function removeFakeList(
  params: ParamsType,
): Promise<{ data: { list: GameListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addFakeList(
  params: ParamsType,
): Promise<{ data: { list: GameListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateFakeList(
  params: ParamsType,
): Promise<{ data: { list: GameListItemDataType[] } }> {
  return request('/api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
