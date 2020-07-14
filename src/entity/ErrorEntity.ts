import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ErrorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  happenTime: string;

  @Column()
  pathname: string;

  @Column()
  customerKey: string;

  @Column()
  pageKey: string;

  @Column()
  deviceName: string;

  @Column()
  os: string;

  @Column()
  browserName: string;

  @Column()
  browserVersion: string;

  @Column()
  monitorIp: string;  // 用户的IP地址

  @Column()
  country: string;  // 用户所在国家

  @Column()
  province: string;  // 用户所在省份

  @Column()
  city: string;  // 用户所在城市
  
  // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
  @Column()
  userId: string;

  @Column()
  firstUserParam: string;

  @Column()
  secondUserParam: string;

  @Column()
  message: string;

  @Column()
  filename: string;

  @Column()
  lineno: string;

  @Column()
  colno: string;

}
